export const alertsURL = 'https://www.cheapshark.com/api/1.0/alerts'

export interface EditAlertParam {
    action: 'set'|'delete',
    email: string,
    gameID:number,
    price:number
}

export interface ManageAlertsParam {
    action:'manage',
    email:string
}