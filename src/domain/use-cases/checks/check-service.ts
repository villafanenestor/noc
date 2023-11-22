
interface CheckServiceUseCase{
execute(url: string):Promise<boolean>
}

type SuccessCallback = ()=> void;
type ErrorCallBack = (error: string)=> void;

export class CheckService implements CheckServiceUseCase{
    
    constructor(
        private readonly successCallBack: SuccessCallback,
        private readonly errorCallBack: ErrorCallBack,
    ){

    }
    public async execute(url: string):Promise<boolean>{ 
        try {
            const req = await fetch(url);
            if(!req.ok){
                throw new Error(`Error on check service ${url}`);
            }
            this.successCallBack();
            // console.log(`${url} : ok`)
            return true;
        } catch (error) {
            // console.log(`${error}`);
            this.errorCallBack(`${error}`); 
            return false;
        }
    }
}