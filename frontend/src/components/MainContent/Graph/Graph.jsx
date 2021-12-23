import React, {useEffect, useRef} from 'react';
import {Toast} from "primereact/toast";

const SIZE = 300

const Graph = (props) => {
    const svgDots = useRef()
    const toastRef = useRef();


    useEffect(() => {
        clearDots()
        props.getEntriesForGraph()
    },[])



    const checkR = () => {
        let message = "R cannot be negative or 0"
        if (props.selectedR <= 0) {
            toastRef.current.show({severity: "error", summary: "Error", detail: message})
            return false
        }
        return true
    }

    const fillPointsToArea = (entries) => {
        if (props.selectedR > 0) {
            entries.forEach(e => {
                drawPoint(e.x, e.y, e.r, e.entry)
            })
        }

    }

    const clearDots = () => {
        document.querySelectorAll(".dot").forEach(e => {
            e.remove()
        })

    }

    const setXSystemCoords = (coordX) => {
        const centerX = 150;
        if (coordX < 0) {
            return centerX - (-coordX);
        } else {
            return centerX + coordX;
        }
    }

    const setXSystemCoordsForClick = (coordX) => {
        let centerX = 150
        if (coordX < centerX) {
            return -(centerX - coordX)
        } else {
            return coordX - centerX
        }
    }

    const setYSystemCoords = (coordY) => {
        const centerY = 150;
        if (coordY < 0) {
            return (-(coordY) + centerY);
        } else {
            return centerY - coordY;
        }
    }


    const convertFromCoordinate = (value) => {
        return (value * props.selectedR) / 120;
    }
    const convertToCoordinate = (value) => {
        return (value * 120) / props.selectedR;
    }

    const drawPoint = (x, y, r, isEntry) => {
        const coordX = setXSystemCoords(convertToCoordinate(x));
        const coordY = setYSystemCoords(convertToCoordinate(y));
        let point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const color = isEntry ? "green" : "red";
        point.setAttribute("cx", coordX);
        point.setAttribute("cy", coordY);
        point.setAttribute("fill", color);
        point.setAttribute("drawRadius", r);
        point.setAttribute("class", "dot");

        point.setAttribute("fillOpacity", 0.7);
        point.setAttribute("r", 5);
        point.setAttribute("stroke", "black");
        point.setAttribute("stroke-width", 0.4);
        svgDots.current.appendChild(point)
    };


    const handleClickOnArea = (e) => {
        if (checkR()) {
            const coordX = e.nativeEvent.offsetX
            const coordY = e.nativeEvent.offsetY
            props.selectY(convertFromCoordinate(setYSystemCoords(coordY)))
            props.selectX(convertFromCoordinate(setXSystemCoordsForClick(coordX)))
            props.checkEntry()
        }
        if (props.errorMessage) {
            toastRef.current.show({severity: "error", summary: "Error", detail: props.errorMessage})
            props.setErrorMessage(undefined)
        }
    }

    if(props.entriesForGraph){
        clearDots()
        fillPointsToArea(props.entriesForGraph)
    }

    return (
        <div>
            <Toast ref={toastRef}/>

            <svg onClick={handleClickOnArea} ref={svgDots} width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="150" x2="300" y2="150" stroke="black"/>
                <line x1="150" y1="0" x2="150" y2="300" stroke="black"/>
                <line x1="270" y1="148" x2="270" y2="152" stroke="black"/>
                <line x1="210" y1="148" x2="210" y2="152" stroke="black"/>
                <line x1="90" y1="148" x2="90" y2="152" stroke="black"/>
                <line x1="30" y1="148" x2="30" y2="152" stroke="black"/>
                <line x1="148" y1="30" x2="152" y2="30" stroke="black"/>
                <line x1="148" y1="90" x2="152" y2="90" stroke="black"/>
                <line x1="148" y1="210" x2="152" y2="210" stroke="black"/>
                <line x1="148" y1="270" x2="152" y2="270" stroke="black"/>

                <text x="290" y="140">X</text>
                <text x="160" y="15">Y</text>
                <text x="200" y="140">{Math.abs(props.selectedR) / 2}</text>
                <text x="156" y="275">-{Math.abs(props.selectedR)}</text>
                <text x="75" y="140">-{Math.abs(props.selectedR) / 2}</text>
                <text x="20" y="140">-{Math.abs(props.selectedR)}</text>
                <text x="156" y="35">{Math.abs(props.selectedR)}</text>
                <text x="156" y="95">{Math.abs(props.selectedR) / 2}</text>
                <text x="156" y="215">-{(Math.abs(props.selectedR)) / 2}</text>
                <text x="265" y="140">{Math.abs(props.selectedR)}</text>

                <rect x="30" y="150" width=" 120" height="120" fill-opacity="0.4" stroke="navy"
                      fill="blue"/>

                <polygon points="300,150 295,155 295, 145" fill="black" stroke="black"/>
                <polygon points="150,0 145,5 155,5" fill="black" stroke="black"/>
                <polygon points="150,150 210,150 150,210" fill-opacity="0.4" stroke="navy"
                         fill="blue"/>

                <path d="M150 150 L 30 150 C 30 150 30 30 150 30" fill-opacity="0.4" stroke="navy"
                      fill="blue"/>
            </svg>
        </div>
    );
}

export default Graph;