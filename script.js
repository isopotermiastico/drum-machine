function createDrumGrid()
{
    const stepsPerRow = 16;

    const padGrid = document.getElementById("padGrid");
    const instrumentLabels = document.getElementById("instrumentLabels");
    
    instruments = ["high hat", "clap", "snare", "kick"];

    function createPadRow(parent)
    {
        const row = document.createElement("div");
        row.className = "pad-row";

        for (let j = 1; j <= stepsPerRow; j += 4) 
            {
            const group = document.createElement("div");
            group.className = "pad-group";

                for (let k = 1; k <= 4; k++) 
                {
                    const pad = document.createElement("button");
                    pad.className = "drum-pad";
                    pad.addEventListener("click", () => pad.classList.toggle("active"));
                    group.appendChild(pad);
                }
                row.appendChild(group);
            }

    
        parent.appendChild(row);
   
    }

    function createInstrumentLable(parent, instrument_name)
    {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = instrument_name;
        parent.appendChild(label);
    
    }

    instruments.forEach(name => 
    {
        createInstrumentLable(instrumentLabels, name);
        createPadRow(padGrid);
    });

        
}


createDrumGrid();