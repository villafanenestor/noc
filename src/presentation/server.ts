import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp{

    public static start(){
        console.log('Server started...');
        CronService.createJob(
            '*/3 * * * * *', // cronTime
            ()=> {
                const url = 'https://google.com';
                new CheckService(
                    ()=> console.log(`${url}: ok`),
                    (error) => console.log(error)
                ).execute(url);
            }, // onTick
        );
    }
}