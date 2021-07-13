var json = {
    'service1': {
        'name': 'couching',
        'time': {
            'from': 1200,
            'to': 1600
        },
        'day': ['saturday', 'sunday', 'monday', 'tuesday'],
        'link': 'https://codewithharry.com'
    },
    'service2': {
        'name': 'mli couching',
        'time': {
            'from': 900,
            'to': 1200
        },
        'day': ['saturday', 'sunday', 'monday', 'tuesday'],
        'link': 'https://mli.com'
    }
}

var customlink = document.getElementById('customlink');

if(localStorage.getItem('custom') == null){
    customlink.innerHTML = `<div class="btn-container" id="cussetbtn">
    <button class="custom-button">Set up now</button>
</div>`;
} else {
    var customJson = JSON.parse(localStorage.getItem('custom'));
}

var cussetbtn = document.getElementById('cussetbtn');
cussetbtn.addEventListener('click', (e)=>{
    e.target.parentNode.parentNode.innerHTML = `
    <div class="animate">
    <h2>1. Name</h2>
    <div class="user-box">
        <input type="text" name="" required="">
        <label>Teacher / Meeting Host Name</label>
    </div>
    <h2>2. Time</h2>
    <div class="timeInput">
        <div class="user-box">
            <input type="text" name="" required="">
            <label>From:</label>
            <div class="invalid">
                <p>invalid input</p>
            </div>
        </div>
        <select class="tiformat">
            <option value="am" selected>AM</option>
            <option value="pm">PM</option>
        </select>
        <div class="user-box">
            <input type="text" name="" required="">
            <label>To:</label>
            <div class="invalid">
                <p>invalid input</p>
            </div>
        </div>
        <select class="tiformat">
            <option value="am" selected>AM</option>
            <option value="pm">PM</option>
        </select>
    </div>
    <h2>3. Day</h2>
    <div class="daysradio">
        <div class="inpucss">
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="saturday" checked>
                <label for="saturday">Saturday</label>
            </div>
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="sunday" checked>
                <label for="sunday">Sunday</label>
            </div>
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="monday" checked>
                <label for="monday">Monday</label>
            </div>
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="tuesday" checked>
                <label for="tuesday">Tuesday</label>
            </div>
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="wednesday" checked>
                <label for="wednesday">Wednesday</label>
            </div>
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="thursday" checked>
                <label for="thursday">Thursday</label>
            </div>
            <div class="checkboxes">
                <input type="checkbox" name="weekday" id="friday">
                <label for="friday">Friday</label>
            </div>
        </div>
    </div>
    <h2>4. Link</h2>
    <div class="linkssetup">
        <div class="daysradio">
            <div class="checkboxes">
                <div class="inpucss">
                    <input type="radio" name="link" id="existing" checked>
                    <label for="existing">
                        Use existing links
                        <select class="tiformat morecss">
                            <option value="none" selected disabled hidden>Choose</option>
                            <option value="1">MLI</option>
                            <option value="2">SPS</option>
                            <option value="2">SBA</option>
                            <option value="2">SDA</option>
                        </select>
                    </label>
                </div>
            </div>

            <div class="checkboxes">
                <input style="margin: 0px 10px;
                width: 20px;
                height: 20px;
                transition: .5s all ease-in-out;" type="radio" name="link" id="custom">
                <label for="custom">
                    <div class="user-box">
                        <input type="text" name="" required="">
                        <label>Use custom link</label>
                    </div>
                </label>
            </div>
        </div>
    </div>
    </div>`;
    
})