function createDrumGrid()
{
    const instruments = 4;
    const stepsPerRow = 16;

    const padGrid = document.getElementById("padGrid");

    function createPadRow(i)
    {
        const row = document.createElement("div");
        row.className = "pad-row";

        const label = document.createElement("div");
        label.className = "instrument-name";
        label.textContent = i;

        row.appendChild(label);

        for (let j = 1; j <= stepsPerRow; j += 4) 
            {
            const group = document.createElement("div");
            group.className = "pad-group";

                for (let k = 1; k <= 4; k++) 
                {
                    const pad = document.createElement("button");
                    pad.className = "drum-pad";
                    group.appendChild(pad);
                }
                row.appendChild(group);
            }
        return row

    }

    for (let i = 1; i <= instruments; i++)
        {
            const pad_row = createPadRow(i);
            padGrid.appendChild(pad_row);
        }
        
}


createDrumGrid();