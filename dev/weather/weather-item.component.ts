import { Component  , Input} from 'angular2/core';
import { WeatherItem } from './weather-item';

@Component({
    selector: "weather-item",
    template: `
        <article class="weather-element">
            <div class="col-1">
                <h3>{{ weatherItem.cityName }}</h3>
                <p class="info">{{ weatherItem.info }}</p>
            </div> 
            <div class="col-2">
                <span class="temparature">{{ weatherItem.temp }}C</span>
            </div>
        </article>
    `,
    styleUrls: ['src/css/weather-item.css']
})


export class WeatherItemComponent{
    @Input('item') weatherItem : WeatherItem;
}