# Create the games directory if it doesn't exist
$gamesDir = "public/images/games"
if (-not (Test-Path $gamesDir)) {
    New-Item -ItemType Directory -Path $gamesDir
}

# Game image URLs (using PlayStation Store images)
$gameImages = @{
    "god-of-war.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/1zwG3uGH5uF8QoE8pB5UJQJ8.jpg"
    "spiderman2.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/Spider-Man-2-PS5-cover.jpg"
    "horizon.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.jpg"
    "ff16.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/2IRxQwXwXwXwXwXwXwXwXwXw.jpg"
    "re4.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202301/1219/RE4-PS5-cover.jpg"
    "baldurs-gate.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202307/1219/Baldurs-Gate-3-PS5-cover.jpg"
    "cyberpunk.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202111/3018/cyberpunk-2077-ps5-cover.jpg"
    "elden-ring.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/PHvVT0qZfcRms5qDAk0SI3CM.jpg"
    "last-of-us.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202206/0710/Last-of-Us-Part-I-PS5-cover.jpg"
    "gran-turismo.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202111/3018/gran-turismo-7-ps5-cover.jpg"
    "demons-souls.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202006/2418/9c2eHtqXwXwXwXwXwXwXwXwX.jpg"
    "ratchet-clank.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202104/2212/Ratchet-and-Clank-PS5-cover.jpg"
    "returnal.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202101/2212/Returnal-PS5-cover.jpg"
    "deathloop.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202106/2212/Deathloop-PS5-cover.jpg"
    "ghost-of-tsushima.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202007/2418/Ghost-of-Tsushima-PS5-cover.jpg"
    "ac-mirage.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202209/1219/Assassins-Creed-Mirage-PS5-cover.jpg"
    "jedi-survivor.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202301/1219/Star-Wars-Jedi-Survivor-PS5-cover.jpg"
    "diablo4.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/Diablo-IV-PS5-cover.jpg"
    "street-fighter6.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202301/1219/Street-Fighter-6-PS5-cover.jpg"
    "armored-core.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202301/1219/Armored-Core-VI-PS5-cover.jpg"
}

# Download each image
foreach ($image in $gameImages.GetEnumerator()) {
    $outputPath = Join-Path $gamesDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "All images have been downloaded successfully!" 