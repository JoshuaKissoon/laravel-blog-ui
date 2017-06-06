/**
 * Service used to manage alerts in the entire system frontend
 * 
 * @author Joshua Kissoon
 * @since 20161013
 */
import { Injectable } from "@angular/core";

@Injectable()
export class AlertService
{
    private alerts: any = [];

    constructor()
    {
        this.alerts = [];
    }

    addAlert(message: string, alertType: string)
    {
        if (alertType == "warning")
        {
            alertType = "warn";
        }
        this.alerts.push({ severity: alertType, summary: 'Message', detail: message });
    }

    getAlerts()
    {
        return this.alerts;
    }

    removeAlert(message: string)
    {
        for (var key in this.alerts)
        {
            var alert = this.alerts[key];

            if (alert.message == message)
            {
                this.alerts.splice(key, 1);
                break;
            }

        }
    }
}
