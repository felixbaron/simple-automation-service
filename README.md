# Simple Automation Service

Simple Automation Service is a simple service, running on [Node-RED](https://nodered.org/), [AutoHotkey](https://www.autohotkey.com/), and [Lintalist](https://lintalist.github.io/), [Selenium](https://www.selenium.dev/), and [Scrapy](https://scrapy.org/), for dealing with your desktop automations.

## Features

- Maintain your AHK automation files in a library
- Schedule any automation CRON-like with Node-node
- Create automation skeletons to kick-start development
- Supported Platforms: Windows 10 (tested)

## Installation

Download these Windows applications:
- [AutoHotkey](https://www.autohotkey.com/)
- [Lintalist](https://github.com/lintalist/lintalist/releases)
- Install Node-RED via Docker:

```bash
# Pull Node-RED docker image
docker pull nodered/node-red
# Run Node-RED Docker service
# TODO: Attach to Volume
docker run -p 1880:1880 --name mynodered nodered/node-red
# Install CRON plugin
docker container ls
docker container prune -f
docker exec -it 890e7ea5db2a /bin/bash
npm install node-red-contrib-cron-plus
```

- [Associate `.py` files with Python.exe.](https://support.microsoft.com/en-us/help/4028161/windows-10-change-default-programs)
- Add your Python automation scripts to $env.Path

```PowerShell
setx PATH "$env:Path;C:\Your\Path"
```

- Add AutoHotkey to your $env.Path variable

```PowerShell
setx PATH "$env:Path;C:\Program Files\AutoHotkey"
```

- Download [Chromedriver](https://chromedriver.chromium.org/downloads) and add to PATH

## Usage

```python
import simple-automation-service as sas

sas.bootstrap() # generate automation-scheduler
sas.load('bots.json') # import bot file
```

## Alternatives

- [Zetta](https://www.zettajs.org/)
- [Arduino](https://www.arduino.cc/)

## Resources

- [Installing Node-RED](https://nodered.org/docs/getting-started/docker)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
