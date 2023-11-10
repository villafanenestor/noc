import { CronService } from "./cron/cron-service";

export class ServerApp{

    public static start(){
        console.log('Server started...');
        CronService.createJob(
            '*/3 * * * * *', // cronTime
            ()=> {
                console.log('You will see this message every second');
            }, // onTick
        );
    }
}