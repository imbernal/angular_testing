interface IWeatherItem{

    cityName: string,
    info: string,
    temp: number

}

export class WeatherItem implements IWeatherItem{

        constructor(public cityName: string , public info: string ,public temp: number){}

}