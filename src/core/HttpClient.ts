export class HttpClient {

    get(url: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await fetch(url);
                if (result.status == 200)
                    resolve(result);

                else
                    reject(result);
            }
            catch (error: any) {
                reject();
            }
        });
    }
}
