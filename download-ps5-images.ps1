# Create the games directory if it doesn't exist
$gamesDir = "public/images/games"
if (-not (Test-Path $gamesDir)) {
    New-Item -ItemType Directory -Path $gamesDir -Force
}

# Define the image URLs and their corresponding filenames
$images = @{
    "god-of-war.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
    "spiderman2.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7f65679ea03cf24a97c6ca0d0c5b0d19b776e84a1eed17.png"
    "horizon.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9dTbAqxzUGqy8PX0gj.png"
    "ff16.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202211/0819/Q1vzYpJFP5sMZJbVz1vYGxqf.png"
    "re4.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahBxN7Ht9EEKXPv.png"
    "baldurs-gate.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7c.png"
    "cyberpunk.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKH4Xyq8Y6yMqXHiZQQrXPXq.png"
    "elden-ring.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202110/2016/OB1sJWqiRvKHmqWKHhUoEOI0.png"
    "last-of-us.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png"
    "gran-turismo.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0EE_wAENB4mJ0Ldp6H6oR1.png"
    "demons-souls.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202011/1215/m1A73O5I5G0MrA5tSPE9GM7N.png"
    "ratchet-clank.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/DwVjpbKOEqz9R3czVVQvb9uZ.png"
    "returnal.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202011/1015/YRqRwl9CM9GNWoq6HGeQBHl4.png"
    "deathloop.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDQzKQuk.png"
    "ghost-of-tsushima.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDQzKQuk.png"
    "ac-mirage.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202304/2714/d2f950a9cf7f9639cd26b6c7c9e83d04b5e1d9e0a6e72446.png"
    "jedi-survivor.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202304/0314/67830d4ef6453f5b8d53d72bc1e95c1f3f4f1cf8e91ee6b1.png"
    "diablo4.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/21382e4f667e09f88c617655751008f4dce815a25e7d0ee7.png"
    "street-fighter6.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/G6NFxJLHcXL4W5FHfedJJZt6.png"
    "armored-core.jpg" = "https://image.api.playstation.com/vulcan/ap/rnd/202212/0909/Vjfd2Ue8MrCbEEQlqHvYCIRz.png"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $gamesDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0")
        $webClient.DownloadFile($image.Value, $outputPath)
        Write-Host "Successfully downloaded $($image.Key)"
    }
    catch {
        Write-Host "Failed to download $($image.Key): $_"
    }
} 