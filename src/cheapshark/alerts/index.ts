export const alertsURL = 'https://www.cheapshark.com/api/1.0/alerts'

export interface EditAlertParam {
    action: 'set'|'delete',
    email: String,
    gameID:number,
    price:number
}

export interface ManageAlertsParam {
    action:'manage',
    email:String
}