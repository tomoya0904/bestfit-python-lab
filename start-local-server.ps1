# Runs a local-only (127.0.0.1) HTTP server for browser Python practice.
# Close this PowerShell window to stop the server.
$ErrorActionPreference = 'Stop'
$base = [System.IO.Path]::GetFullPath((Split-Path -Parent $MyInvocation.MyCommand.Path))
$port = 8765
try {
  $listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $port)
  $listener.Start()
} catch {
  Write-Host "Port $port is busy or unavailable." -ForegroundColor Red
  Write-Host $_.Exception.Message
  exit 1
}
Write-Host 'Python LAB local preview is ready.' -ForegroundColor Green
Write-Host "Open http://127.0.0.1:$port/index.html"
Write-Host 'Leave this window open while testing. Ctrl+C to stop.'
Start-Process "http://127.0.0.1:$port/index.html"
$types = @{'.html'='text/html; charset=utf-8';'.js'='text/javascript; charset=utf-8';'.mjs'='text/javascript; charset=utf-8';'.css'='text/css; charset=utf-8';'.png'='image/png';'.svg'='image/svg+xml';'.json'='application/json; charset=utf-8';'.ico'='image/x-icon'}
try {
  while ($true) {
    $client=$listener.AcceptTcpClient()
    try {
      $client.ReceiveTimeout=5000
      $client.SendTimeout=10000
      $stream=$client.GetStream()
      $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $request = $reader.ReadLine()
      if (!$request) { continue }
      while ($true) {
        $line = $reader.ReadLine()
        if ($null -eq $line -or $line -eq '') {break}
      }
      $requestParts = $request.Split(' ')
      if($requestParts.Length -lt 2) {continue}
      $relative= [System.Uri]::UnescapeDataString(($requestParts[1].Split('?')[0])).TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
      if (!$relative) {$relative='index.html'}
      $path=[System.IO.Path]::GetFullPath((Join-Path $base $relative))
      $ext=[System.IO.Path]::GetExtension($path).ToLowerInvariant()
      $valid = $path.StartsWith(($base.TrimEnd([System.IO.Path]::DirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar), [System.StringComparison]::OrdinalIgnoreCase) -and $types.ContainsKey($ext) -and (Test-Path -LiteralPath $path -PathType Leaf)
      if($valid){
        $bytes=[System.IO.File]::ReadAllBytes($path)
        $mime=$types[$ext]
        $status='200 OK'
      } else {
        $bytes=[System.Text.Encoding]::UTF8.GetBytes('Not Found')
        $mime='text/plain; charset=utf-8'
        $status='404 Not Found'
      }
      $header="HTTP/1.1 $status`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
      $h=[System.Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($h,0,$h.Length)
      if($requestParts[0] -ne 'HEAD'){$stream.Write($bytes,0,$bytes.Length)}
      $stream.Flush()
    } catch {
      Write-Host "Request failed: $($_.Exception.Message)"
    } finally { $client.Close() }
  }
} finally {$listener.Stop()}
