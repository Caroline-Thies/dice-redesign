export class BackendAdapter {
  static async login(username, password) {
    return {
      user: "testUser"
    }
  }

  static async register(username, password) {

  }

  static async logout() {

  }

  static async getAllCharacterNames() {
    return ["Alexander der Große", "Maximilian Mustermann"]
  }

  static async getCharacterByName(name) {
    if (name === "Alexander der Große") {
      return {
        name: "Alexander der Große",
        hasPsiModule: false,
        wisdom: 5,
        selfControl: 3,
        kraftgruppen: {
          Animakinese: 5,
          Audiokinese: 0,
          Biokinese: 0,
          Chronokinese: 0,
          Cryokinese: 0,
          Elektrokinese: 0,
          Momenkinese: 0,
          Morphokinese: 0,
          Photokinese: 0,
          Psychokinese: 0,
          Pyrokinese: 3,
          Technokinese: 0,
          Telekinese: 0
        },
        psiApps: {
          "Animakinese": [
            {
              name: "Spiritwalk",
              minValue: 11,
              maxValue: 15,
              noobLevel: 18,
              masterLevel: 8,
              kraftgruppe: "Animakinese",
              description: "Der Wirker löst seine Neuralprojektion vom Körper und kann sich so 1+[KS] Spielrunden frei „Schnelligkeit x10 Einheiten“ schnell bewegen. Die Materie behindert die NP dabei nicht und er verfügt über sämtliche natürlichen Wahrnehmungen seines eigentlichen Körpers. Der Körper des Wirkers kann während dessen nicht benutzt werden. Nach ablauf der Zeit, wird die NP sofort in den Körper des Wirkers zurück geschleudert."
            },
            {
              name: "Seelenwandel",
              minValue: 23,
              maxValue: 25,
              noobLevel: 30,
              masterLevel: undefined,
              kraftgruppe: "Animakinese",
              description: "Mit dem erfolgreichem wirken dieser App kann der Wirker Neuralprojektionen, die nicht in einem Körper stecken, die er aufgespürt hat (siehe App „Suche“ oder „Jenseitsbrücke“) oder in seinem Einflussbereich hält (siehe App „Kick“) in einen lebenden Körper transferieren. Je erfolgreichem Einsatz dieser App, verliert der Wirker 5-[KS] Psyche. Die Neuralprojektion kann nur in Körper eingefügt werden, die nicht bereits von einer NP belegt sind."
            },
            {
              name: "Orakel",
              minValue: 8,
              maxValue: 12,
              noobLevel: 14,
              masterLevel: 6,
              kraftgruppe: "Animakinese",
              description: "Der Wirker kann die NP aller lebenden Organismen in einem Radius von 5+[KS]x10 Metern wahrnehmen. Für [4KS] kann der Wirker ALLES, farblos erkennen, was sich im Radius befindet."
            }
          ],
          "Audiokinese": [],
          "Biokinese": [],
          "Chronokinese": [],
          "Cryokinese": [],
          "Elektrokinese": [],
          "Heimakinese": [],
          "Momenkinese": [],
          "Morphokinese": [],
          "Photokinese": [],
          "Psychokinese": [],
          "Pyrokinese": [
            {
              name: "Erhitzen",
              minValue: 8,
              maxValue: 12,
              noobLevel: 14,
              masterLevel: 6,
              kraftgruppe: "Pyrokinese",
              description: "Der Wirker ist in der Lage Objekte bis zu 100+[KS]x30°C und die Umgebung bis zu 20+[KS]x10°C zu erhitzen. Je nach Temperatur kommt es dazu das Gegenstände Feuer fangen."
            },
            {
              name: "Lavafalle",
              minValue: 11,
              maxValue: 15,
              noobLevel: 18,
              masterLevel: 8,
              kraftgruppe: "Pyrokinese",
              description: ""
            }
          ],
          "Technokinese": [],
          "Telekinese": []
        }
      }
    }
    else if (name === "Maximilian Mustermann") {
      return {
        name: "Alexander der Große",
        hasPsiModule: false,
        wisdom: 5,
        selfControl: 6,
        kraftgruppen: {
          Animakinese: 3,
          Audiokinese: 0,
          Biokinese: 0,
          Chronokinese: 0,
          Cryokinese: 0,
          Elektrokinese: 0,
          Momenkinese: 0,
          Morphokinese: 0,
          Photokinese: 0,
          Psychokinese: 0,
          Pyrokinese: 5,
          Technokinese: 0,
          Telekinese: 0
        },
        psiApps: {
          "Animakinese": [
            {
              name: "Spiritwalk",
              minValue: 11,
              maxValue: 15,
              noobLevel: 18,
              masterLevel: 8,
              kraftgruppe: "Animakinese",
              description: "Der Wirker löst seine Neuralprojektion vom Körper und kann sich so 1+[KS] Spielrunden frei „Schnelligkeit x10 Einheiten“ schnell bewegen. Die Materie behindert die NP dabei nicht und er verfügt über sämtliche natürlichen Wahrnehmungen seines eigentlichen Körpers. Der Körper des Wirkers kann während dessen nicht benutzt werden. Nach ablauf der Zeit, wird die NP sofort in den Körper des Wirkers zurück geschleudert."
            },
            {
              name: "Seelenwandel",
              minValue: 23,
              maxValue: 25,
              noobLevel: 30,
              masterLevel: undefined,
              kraftgruppe: "Animakinese",
              description: "Mit dem erfolgreichem wirken dieser App kann der Wirker Neuralprojektionen, die nicht in einem Körper stecken, die er aufgespürt hat (siehe App „Suche“ oder „Jenseitsbrücke“) oder in seinem Einflussbereich hält (siehe App „Kick“) in einen lebenden Körper transferieren. Je erfolgreichem Einsatz dieser App, verliert der Wirker 5-[KS] Psyche. Die Neuralprojektion kann nur in Körper eingefügt werden, die nicht bereits von einer NP belegt sind."
            },
            {
              name: "Orakel",
              minValue: 8,
              maxValue: 12,
              noobLevel: 14,
              masterLevel: 6,
              kraftgruppe: "Animakinese",
              description: "Der Wirker kann die NP aller lebenden Organismen in einem Radius von 5+[KS]x10 Metern wahrnehmen. Für [4KS] kann der Wirker ALLES, farblos erkennen, was sich im Radius befindet."
            }
          ],
          "Audiokinese": [],
          "Biokinese": [],
          "Chronokinese": [],
          "Cryokinese": [],
          "Elektrokinese": [],
          "Heimakinese": [],
          "Momenkinese": [],
          "Morphokinese": [],
          "Photokinese": [],
          "Psychokinese": [],
          "Pyrokinese": [
            {
              name: "Erhitzen",
              minValue: 8,
              maxValue: 12,
              noobLevel: 14,
              masterLevel: 6,
              kraftgruppe: "Pyrokinese",
              description: "Der Wirker ist in der Lage Objekte bis zu 100+[KS]x30°C und die Umgebung bis zu 20+[KS]x10°C zu erhitzen. Je nach Temperatur kommt es dazu das Gegenstände Feuer fangen."
            },
            {
              name: "Lavafalle",
              minValue: 11,
              maxValue: 15,
              noobLevel: 18,
              masterLevel: 8,
              kraftgruppe: "Pyrokinese",
              description: ""
            }
          ],
          "Technokinese": [],
          "Telekinese": []
        }
      }
    }
  }

  static async addCharacter(character) {

  }

  static async getAllAppNamesByKraftgruppe(kraftgruppe) {
    switch (kraftgruppe) {
      case "Animakinese":
        return ["Spiritwalk",
          "Seelenwandel",
          "Orakel",
          "Good Guess",
          "Suche",
          "Remote Viewing",
          "Jenseitsbrücke",
          "Hellsicht",
          "Kick",
          "PSI-Sicht"]
      case "Pyrokinese":
        return ["Erhitzen",
          "Lavafalle",
          "Flammenbändiger",
          "Inferno",
          "Flammenhand",
          "Explosion",
          "Entzünden",
          "Schmelzen",
          "Absorption",
          "Hitzeschock"]
      default:
        return []
    }
  }

  static async setAppLearned(charName, appName, learned) {

  }

  static async updateCharacter(character) {

  }
}
