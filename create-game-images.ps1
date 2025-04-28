# Create the games directory if it doesn't exist
$gamesDir = "public/images/games"
if (-not (Test-Path $gamesDir)) {
    New-Item -ItemType Directory -Path $gamesDir
}

# Game titles and their image names
$games = @(
    @{name="God of War Ragnarök"; file="god-of-war.jpg"},
    @{name="Spider-Man 2"; file="spiderman2.jpg"},
    @{name="Horizon Forbidden West"; file="horizon.jpg"},
    @{name="Final Fantasy XVI"; file="ff16.jpg"},
    @{name="Resident Evil 4 Remake"; file="re4.jpg"},
    @{name="Baldur's Gate 3"; file="baldurs-gate.jpg"},
    @{name="Cyberpunk 2077"; file="cyberpunk.jpg"},
    @{name="Elden Ring"; file="elden-ring.jpg"},
    @{name="The Last of Us Part I"; file="last-of-us.jpg"},
    @{name="Gran Turismo 7"; file="gran-turismo.jpg"},
    @{name="Demon's Souls"; file="demons-souls.jpg"},
    @{name="Ratchet & Clank: Rift Apart"; file="ratchet-clank.jpg"},
    @{name="Returnal"; file="returnal.jpg"},
    @{name="Deathloop"; file="deathloop.jpg"},
    @{name="Ghost of Tsushima"; file="ghost-of-tsushima.jpg"},
    @{name="Assassin's Creed Mirage"; file="ac-mirage.jpg"},
    @{name="Star Wars Jedi: Survivor"; file="jedi-survivor.jpg"},
    @{name="Diablo IV"; file="diablo4.jpg"},
    @{name="Street Fighter 6"; file="street-fighter6.jpg"},
    @{name="Armored Core VI"; file="armored-core.jpg"}
)

# Create an HTML file that will generate the images
$html = @"
<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; }
        .game-card {
            width: 400px;
            height: 600px;
            background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .game-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .ps5-badge {
            background: #006FCD;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
"@

foreach ($game in $games) {
    $html += @"
    <div class="game-card">
        <div class="game-title">$($game.name)</div>
        <div class="ps5-badge">PS5 EXCLUSIVE</div>
    </div>
"@
}

$html += @"
</body>
</html>
"@

# Save the HTML file
$htmlPath = Join-Path $gamesDir "generate-images.html"
$html | Out-File -FilePath $htmlPath -Encoding UTF8

Write-Host "HTML file created at: $htmlPath"
Write-Host "Please open this file in a browser and take screenshots of each game card to create the images." 