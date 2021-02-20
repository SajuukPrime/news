import { domToObject } from "./getinfo"
const ciicConfig = new domToObject("#ciic-config")
const isMobileDevice = navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)

if (ciicConfig.banner) {
    const loadBanner = device => {
        let bannerStyle;
        const regRes = device.indexOf(RegExp(/[Mm]obile/));
        if (ciicConfig.banner[device] && regRes) {
            for (bannerStyle in ciicConfig.banner[device]) {
                document.querySelectorAll('.banner')[0].style.cssText += `${bannerStyle}:${ciicConfig.banner[device][bannerStyle]}`
            }
        }
    }
    isMobileDevice ? loadBanner('mobile') : loadBanner('desktop')
}