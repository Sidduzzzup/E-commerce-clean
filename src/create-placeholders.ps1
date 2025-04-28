# Create the games directory if it doesn't exist
$gamesDir = "public/images/games"
if (-not (Test-Path $gamesDir)) {
    New-Item -ItemType Directory -Path $gamesDir -Force
}

# Define the games that need placeholders
$games = @{
    "ghost-of-tsushima.jpg" = "Ghost of Tsushima"
    "ratchet-clank.jpg" = "Ratchet & Clank: Rift Apart"
    "demons-souls.jpg" = "Demon's Souls"
    "gran-turismo.jpg" = "Gran Turismo 7"
}

# Read the template
$template = Get-Content -Path "public/images/games/placeholder-template.svg" -Raw

# Create a placeholder for each game
foreach ($game in $games.GetEnumerator()) {
    $outputPath = Join-Path $gamesDir $game.Key
    $content = $template -replace "GAME_TITLE", $game.Value
    
    try {
        Set-Content -Path $outputPath -Value $content
        Write-Host "Created placeholder for $($game.Value)"
    }
    catch {
        Write-Host "Failed to create placeholder for $($game.Value): $_"
    }
} 