import React, { useEffect } from 'react';


class PencilTool extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 10
            
        }
    }

    componentDidMount() {
        const canvas = document.querySelector(".canvas")
        const ctx = canvas.getContext('2d');

        canvas.height = 400;
        canvas.width = 400;

        let painting = false;

        function startPosition(e) {
            painting = true
            draw(e);
        }

        function finishedPosition() {
            painting = false
            ctx.beginPath();
        }

        function draw(e, bruh) {
            console.log(bruh)
            if (!painting) return;
            ctx.lineWidth = 10;
            ctx.lineCap = "round"


            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke()
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY)
        }

        canvas.addEventListener("mousedown", startPosition)
        canvas.addEventListener("mouseup", finishedPosition)
        canvas.addEventListener("mousemove", draw)
    }

    render() {
        return(
            <canvas className="canvas"></canvas>
            
        )
    }
}

export default PencilTool