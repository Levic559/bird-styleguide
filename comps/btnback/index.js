function BtnBackUI () {
    return`
    <div style="
        display: flex;
        flex-direction: row;
        max-width: 129px;
        justify-content: space-between;
        align-items: center;
        transition: opacity 1s;
    "
    onclick='BtnPagesUI.HandleClick(this)'
    >
        <div style="
            font-size: 30px;
            font-weight: bold;
            color: #545454;
            
        "

        > <<< </div>

        <div style="
            font-size: 25px;
            color: #545454;
        "

        >Back</div>

    </div>


    `
}

BtnBackUI.HandleClick = (el) => {
    el.style.opacity = 0.5;
}
