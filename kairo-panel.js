// For Use only with Plasmium Aggregator 5.1 2021 Public Build.
// Requires Latte Dock and Plasma 5
var allPanels = panels();
for (var i = 0; i < allPanels.length; i++) {
    allPanels[i].remove();
}

//Bottom Panel Configurations
var panel = new Panel;
panel.location = "bottom";
panel.height = 48;

// Background Adjuetments
panel.backgroundHints = "NoBackground";  // Let theme manage transparency


var launcher = panel.addWidget("org.kde.plasma.kickoff");
launcher.currentConfigGroup = ["General"];
launcher.writeConfig("icon", "start-here-kairo");
launcher.writeConfig("showRecentApps", "true");

// Add task manager
panel.addWidget("org.kde.plasma.taskmanager");

// Add system tray
var tray = panel.addWidget("org.kde.plasma.systemtray");
tray.currentConfigGroup = ["General"];
tray.writeConfig("extraItems", ["org.kde.plasma.networkmanagement", "org.kde.plasma.volume", "org.kde.plasma.battery"]);
tray.reloadConfig();

// Add digital clock
panel.addWidget("org.kde.plasma.digitalclock");

// Optional: rounded corners (can be added using Latte Addon W1-1.50
