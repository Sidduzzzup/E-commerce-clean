# Create the games directory if it doesn't exist
$gamesDir = "public/images/games"
if (-not (Test-Path $gamesDir)) {
    New-Item -ItemType Directory -Path $gamesDir -Force
}

# Define the remaining image URLs
$images = @{
    "ghost-of-tsushima.jpg" = "https://cdn2.unrealengine.com/ghost-of-tsushima-directors-cut-hero-1920x1080-1920x1080-cd9a913f0efb.jpg"
    "ratchet-clank.jpg" = "https://cdn2.unrealengine.com/ratchet-clank-rift-apart-key-art-1920x1080-1920x1080-839956d5906f.jpg"
    "demons-souls.jpg" = "https://cdn2.unrealengine.com/demons-souls-remake-hero-1920x1080-1920x1080-160872f60e11.jpg"
    "gran-turismo.jpg" = "https://cdn2.unrealengine.com/gt7-hero-1920x1080-1920x1080-c89c96b53716.jpg"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $gamesDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    
    try {
        $headers = @{
            "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            "Accept" = "image/webp,image/apng,image/*,*/*;q=0.8"
            "Accept-Encoding" = "gzip, deflate, br"
            "Accept-Language" = "en-US,en;q=0.9"
        }
        
        Invoke-RestMethod -Uri $image.Value -Headers $headers -OutFile $outputPath
        Write-Host "Successfully downloaded $($image.Key)"
    }
    catch {
        Write-Host "Failed to download $($image.Key): $_"
    }
} 