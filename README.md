
#### HTML User Interface for python using Eel Library

In this app we are implementing Python Eel Libary to create UI for python program using HTML, CSS and javaScript.

To put is simply the eel library is used to create HTML UI for Python applications. While there are tools such as Tkinter, where the GUI can be coaded in python but the limitations are quite high and does not give as much as freedom as we get from  using HTML and CSS.

for more reference visit these articles from [medium](https://medium.com/@utsav_datta/create-html-user-interface-for-python-using-eel-library-bab101cc0f99) and [Nitratine](https://nitratine.net/blog/post/python-gui-using-chrome/).

##### Implementing the Library

In this App we are going to create python Email Slicer with a interactive UI and then converting it into .exe so that it can be shared.

The first step is to install the Libraries through pip.

`pip install eel` [ eel documentation](https://pypi.org/project/Eel/)
`pip install pyinstaller`

Then we open a new folder named __"Eel_App"__ and crate another folder named __"web"__ under it. 

The __"Eel_App"__ folder contains following files and folder.

- web
- App.py
- app_icon.ico

The __"web"__ folder contains following files.
- index.html
- style.css
- script.js
- icon.ico
___
###### creating the app :-
In **"App.py"** file we import and initialize eel.

```python
    import eel
    eel.init('web')
    eel.start('index.html')
```
we can include options as arguments inside `eel.start()` such as size, host, port etc.
Before starting the "index.html" we will expose it to javascript and add the logic to the python file which will process the input passed by the javascript file.
```python
    @eel.expose
    def runPythonFunction(input_value):
        process(inut_value)
        return processed_input_value
```
In the HTML page we link the stylesheet and script and then we create input fileds and buttons as required.
```html
    <div>
        <form>
            <input type="text" id="input">
            <button type="submit" id="btn">
            <input type="text" id="output" disabled>
        </form>
    </div>
```
for communication with python we need to put a javaScript file in our HTML.
```html
    <script type="text/javascript" src="/eel.js">
```
This will allow javaScript and python to communicate as the client.

In our javaScript file we select DOM elements and Trigger events on them. The javaScript file should collect the input data from DOM and pass it to the Python file.

```javascript
    const input = document.getElementbyId('inut');
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');

    btn.addEventListener('click',runJavaScriptFunction);

    function runJavaScriptFunction(){
        eel.runPythonFunction(input.value)(callback)
    }
```
The `callback()` here in javascript recieves the direct output which is returned by the `runPythonFunction()` inside python file.

the `callback()` does the rest of the thing and prints the output in the DOM.

```javascript
    function callback(processed_output_value){
        output.value=processed_output_value;
        output.style.backgroundColor="aliceblue";
    }
```
___
###### Packaging the app :-

This is the final process of our aplication. we will be generating the .exe build which can be shared to another machine.

to build the app in .exe format we will go to __"Eel_app"__  folder -> click _shift+ right click_ to open power shell window in that folder -> then type following command.

`python -m eel your_python_file.py web --noconsole --onefile --icon=app_icon.ico `

if you want to run your app with no console you can remove `--noconsole` flag

this will build the app in .exe format.




