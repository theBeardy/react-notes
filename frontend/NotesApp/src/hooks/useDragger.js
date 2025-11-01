import React, { useEffect, useRef } from "react";

function useDragger(id) {

    const isClicked = useRef(false);

    const coords = useRef({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
    })

    useEffect(() => {

        const target = document.getElementById(id);
        if (!target) throw new Error("Element with given ID doesn't exist");

        const window = target.parentElement;

        const container = window.parentElement;
        if (!target) throw new Error("target element must have a parent")
        
        const onMouseDown = (e) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = (e) => {
            isClicked.current = false;
            coords.current.lastX = window.offsetLeft;
            coords.current.lastY = window.offsetTop;
        };

        const onMouseMove = (e) => {
            if(!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            window.style.top = `${nextY}px`;
            window.style.left = `${nextX}px`;
        };

        target.addEventListener("mousedown", onMouseDown);
        target.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanup = () => {
            target.removeEventListener("mousedown", onMouseDown);
            target.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        }

        return cleanup;
    }, [id]);
}

export default useDragger