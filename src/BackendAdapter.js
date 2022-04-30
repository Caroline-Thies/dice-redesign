export class BackendAdapter {
    //static backendAddress =
       //"https://dicecalculator-backend-sfvnbndcgv.azurewebsites.net";
    static backendAddress = "http://localhost:5000";
  
    static async login(username, password) {
      const user = { username: username, password: password };
      const response = await (
        await fetch(this.backendAddress + "/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(user),
        })
      ).json();
      return response;
    }
  
    static async logout() {
      const response = await (
        await fetch(this.backendAddress + "/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
      ).json();
      return response;
    }
  
    static async register(username, password) {
      const user = { username: username, password: password };
      const response = await (
        await fetch(this.backendAddress + "/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(user),
        })
      ).json();
      return response;
    }

    static async getAllCharacterNames() {
        const response = await fetch(this.backendAddress + "/allCharacterNames", {
          credentials: "include",
        });
        if (!response.ok) {
          return [];
        }
        const data = await response.json();
        return data
      }
    
    static async getCharacterByName(name) {
        const response = await fetch(this.backendAddress + "/oneCharacter", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({characterName: name})
        });
        const char = await response.json()
        if(!response.ok || !char.name) {
            return undefined;
        } 
        return char
    }

    static async addCharacter(character) {
      character.psiApps = {
        Animakinese: [],
        Audiokinese: [],
        Biokinese: [],
        Chronokinese: [],
        Cryokinese: [],
        Elektrokinese: [],
        Momenkinese: [],
        Morphokinese: [],
        Photokinese: [],
        Psychokinese: [],
        Pyrokinese: [],
        Technokinese: [],
        Telekinese: [],
      }
      const response = await (
        await fetch(this.backendAddress + "/addCharacter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(character),
          credentials: "include",
        })
      ).json();
      return response;
    }

    static async getAllAppNamesByKraftgruppe(kraftgruppe) {
      const apps = await (
        await fetch(
          this.backendAddress +
            "/getAppNames?" +
            new URLSearchParams({ kraftgruppe: kraftgruppe }),
          { credentials: "include" }
        )
      ).json();
      return apps;
    }
}