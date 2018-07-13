export class List {
    constructor(public siteURL: string, public listName: string) {
    }

    getItems(callback: Function) {
        $.ajax(
        {
            url: `${this.siteURL}/_api/web/lists/getByTitle('${this.listName}')/items/`,
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success: (data) => {
                if (callback !== undefined)
                    callback(data.d.results);
            },
            error: (err) => {
                console.log(JSON.stringify(err));
            }
        })
    }
}