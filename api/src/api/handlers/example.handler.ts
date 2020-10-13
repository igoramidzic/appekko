export const getExample = async (): Promise<string> => {
    return new Promise((resolve, reject) => {

        let rand: number = Math.random()
        setTimeout(() => {
            if (rand < 0.5)
                resolve("50% Success")
            else
                reject("50% Failure")
        }, 1000)
    });
};