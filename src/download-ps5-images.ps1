# Create the games directory if it doesn't exist
$gamesDir = "public/images/games"
if (-not (Test-Path $gamesDir)) {
    New-Item -ItemType Directory -Path $gamesDir -Force
}

# Define the image URLs and their corresponding filenames
$images = @{
    "god-of-war.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg"
    "spiderman2.jpg" = "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg"
    "horizon.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg"
    "ff16.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/2324650/header.jpg"
    "re4.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"
    "baldurs-gate.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
    "cyberpunk.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    "elden-ring.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    "last-of-us.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg"
    "gran-turismo.jpg" = "https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-hero-banner-desktop-01-en-07sep21"
    "demons-souls.jpg" = "https://gmedia.playstation.com/is/image/SIEPDC/demons-souls-listing-thumb-01-ps5-en-11jun20"
    "ratchet-clank.jpg" = "https://gmedia.playstation.com/is/image/SIEPDC/ratchet-and-clank-rift-apart-hero-banner-desktop-01-ps5-en-01jun21"
    "returnal.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/header.jpg"
    "deathloop.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1252330/header.jpg"
    "ghost-of-tsushima.jpg" = "https://gmedia.playstation.com/is/image/SIEPDC/ghost-of-tsushima-directors-cut-hero-banner-desktop-01-ps5-02aug21"
    "ac-mirage.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1892130/header.jpg"
    "jedi-survivor.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg"
    "diablo4.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg"
    "street-fighter6.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg"
    "armored-core.jpg" = "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/header.jpg"
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