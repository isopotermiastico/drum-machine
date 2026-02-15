function createDrumGrid()
{
    const stepsPerRow = 16;

    const padGrid = document.getElementById("padGrid");
    
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
        const full_row = document.createElement("div");
        full_row.className = "full-row";
        createInstrumentLable(full_row, name);
        createPadRow(full_row);
        padGrid.appendChild(full_row);
        });
   
        
}

let sequencerInterval = null;
let isPlaying = false;

const sounds = 
[
new Audio("sounds/hihat.wav"),
new Audio("sounds/clap.wav"),
new Audio("sounds/snare.wav"),
new Audio("sounds/kick.wav")
];


 const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", () => 
    {
        toggleSequencer();

        if (isPlaying == false)
            {
                playButton.textContent = "play";
            }
        else
            {
                playButton.textContent = "stop";
            }
    })

let current_step = 0
const total_steps = 16;

function playStep()
{   

    const rows = document.querySelectorAll(".pad-row");
    rows.forEach
    (
        (row, row_index) =>
        {
            const pads = row.querySelectorAll(".drum-pad");
            const pad = pads[current_step];
            if (pad.classList.contains("active"))
                {
                    sounds[row_index].currentTime = 0;
                    sounds[row_index].play();
                }
        }
        
        
        
    )
    
    current_step++;
    if (current_step >= total_steps)
    {
        current_step = 0;
    }

}


function toggleSequencer()
{

    if (!isPlaying)
    {
        current_step = 0;
        sequencerInterval = setInterval(playStep, 200);
        isPlaying = true;
    }
    else
    {
        clearInterval(sequencerInterval);
        isPlaying = false;
    }
    

}




createDrumGrid();
