import blessedSolar from '#root/images/blessedSolar.png';
import chuCodes from '#root/images/chuCodes.png';
import gidbox from '#root/images/gidbox.png';
import transcenda from '#root/images/transcenda.png';
import xafebox from '#root/images/xafebox.png';
import zimarex from '#root/images/zimarex.png';

const menuItems = [
    {title: "about", link: "/about", id: 1},
    {title: "works", link: "/work", id: 2},
    {title: "contact", link: "/contact", id: 3}
];

export const allJobs = [
    {title: "Transcend Africa", link: "https://transcendapro.com/", bgColor: "#F1F1F1", id: 1, color: "#000", align: "flex-end", bgImg: transcenda},

    {title: "Xafebox", link: "https://xafebox.co/", bgColor: "#959595", id: 2, color: "#000", align: "flex-start", bgImg: xafebox},

    {title: "Gidbox", link: "https://gidbox.com/", bgColor: "#E0E0E0", id: 3, color: "#000", align: "flex-end", bgImg: gidbox},

    {title: "Chu Codes", link: "/", bgColor: "#515151", id: 4, color: "#fff", align: "center", bgImg: chuCodes},

    {title: "Blessed Solar Engineering", link: "https://blessedsolareng.com/", bgColor: "#B4B4B4", id: 5, color: "#000", align: "flex-end", bgImg: blessedSolar},

    {title: "Zimarex", link: "https://zimarex.com/", bgColor: "#000000", id: 6, color: "#fff", align: "flex-start", bgImg: zimarex},
]

export default menuItems;