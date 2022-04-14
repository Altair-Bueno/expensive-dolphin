import './PriceRangeSlider.css'

export interface PriceRange {
    lowerPrice?:number,
    upperPrice?:number
}

export interface PriceRangeSliderProps {
    min?:number,
    max?:number,
    step?:number
    className?:string
    onchange:(range:PriceRange)=>void
}

export function PriceRangeSlider (props: PriceRangeSliderProps) {
    // from https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1
    // FIXME: Spawns over the Game modal page
    return <div className={props.className}>
        <input type={"range"}
               className="thumb thumb--zindex-3"
               defaultValue={props.min}
               min={props.min}
               max={props.max}
               onChange={x=>props.onchange({lowerPrice:Number.parseInt(x.target.value)})}
               step={props.step}
        />
        <input type={"range"}
               className="thumb thumb--zindex-4"
               defaultValue={props.max}
               min={props.min}
               max={props.max}
               onChange={x=>props.onchange({upperPrice:Number.parseInt(x.target.value)})}
               step={props.step}
        />
        <div className="slider">
            <div className="slider__track" />
            <div className="slider__range" />
        </div>
    </div>
}