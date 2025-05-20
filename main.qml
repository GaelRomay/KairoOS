import Plasmium 5.1
import QtQuick 2.15
import QtQuick.Controls 2.5
import org.kde.plasma.core 2.0 as PlasmaCore
import org.kde.plasma.components 3.0 as PlasmaComponents

Item {
    id: root
    width: 320
    height: 480

    Rectangle {
        anchors.fill: parent
        color: "#f8f8f8"
        radius: 16
        border.color: "#dddddd"
        border.width: 1

        Column {
            anchors.fill: parent
            spacing: 12
            padding: 16

            PlasmaComponents.TextField {
                id: searchField
                placeholderText: "Search apps..."
                onTextChanged: appsModel.filter = text
            }

            ListView {
                id: appList
                model: appsModel
                delegate: PlasmaComponents.ItemDelegate {
                    width: parent.width
                    text: model.display
                    icon.name: model.decoration
                    onClicked: {
                        launcherRunner.run(model.url)
                    }
                }
            }
        }
    }

    PlasmaCore.DataSource {
        id: appsModel
        engine: "applications"
    }

    PlasmaCore.RunnerManager {
        id: launcherRunner
    }
}
