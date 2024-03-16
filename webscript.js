function login() {
    let username = document.getElementById('username').value;
    
        if (username == 'Einstellungen'){
        todolist.innerHTML += '<li class="mdl-list__item mdl-list__item--two-line"> <span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i>&nbsp;&nbsp;&nbsp;&nbsp;<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"> <span onclick="setVolumeOn()" class="material-icons">volume_up</span></button>   &nbsp;&nbsp;&nbsp;&nbsp;<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"> <span onclick="setVolumeOff()" class="material-icons">volume_off</span></button>&nbsp;&nbsp;&nbsp;&nbsp<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"> <span onclick="playVid()" class="material-icons">play_arrow</span></button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"> <span onclick="pauseVid()" class="material-icons">pause</span></button></span><span class="mdl-list__item-secondary-content"> <span class="mdl-list__item-secondary-info"></span> <a class="mdl-list__item-secondary-action" href="#"> <span class="material-icons">check_circle</span></a></li>';
};

    if (username == 'Venom'){
        todolist.innerHTML = '<li class="mdl-list__item mdl-list__item--two-line"> <span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i> <span>DilPrime</span> <span class="mdl-list__item-sub-title">DilPrimeTimes - Golden State Killer</span> </span> <span class="mdl-list__item-secondary-content"> <span class="mdl-list__item-secondary-info"></span> <a class="mdl-list__item-secondary-action" href="#"> <span class="material-icons">check_circle</span></a></li>' + '<iframe src="https://drive.google.com/file/d/1R8t_1RcYNJgdnK5KpqwqzaHuV6bLdNqg/preview" width="340px" height="215px"  allow="autoplay"></iframe>';
};

   if (username == '#dilprime'){
        todolist.innerHTML = '<li class="mdl-list__item mdl-list__item--two-line"> <span class="mdl-list__item-primary-content"> <img src="dilprimeimage.png" class="mdl-list__item-avatar"> <span>DilPrime.TV</span> <span class="mdl-list__item-sub-title">DilPrimeTimes - Golden State Killer</span> </span> <span class="mdl-list__item-secondary-content"> <span class="mdl-list__item-secondary-info"></span> <a class="mdl-list__item-secondary-action" href="#"> <span class="material-icons">check_circle</span></a></li>' + '<iframe src="https://drive.google.com/file/d/1R8t_1RcYNJgdnK5KpqwqzaHuV6bLdNqg/preview" width="340px" height="215px"  allow="autoplay"></iframe>'
};

  if (username == 'baum'){
        todolist.innerHTML = '<li class="mdl-list__item mdl-list__item--two-line"> <span class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-avatar">person</i> <span>DilPrime</span> <span class="mdl-list__item-sub-title">Minion film</span> </span> <span class="mdl-list__item-secondary-content"> <span class="mdl-list__item-secondary-info"></span> <a class="mdl-list__item-secondary-action" href="#"> <span class="material-icons">check_circle</span></a></li>' + '<video src="https://861530173.tapecontent.net/radosgw/OxvQ91RRdqCZRrD/DAb-DYwUHXyEzQed9HyT_ip-1qu9WfKQQzQp9KNcynRD6IktNgZQ4e-uo8j3Kg_fEfFc4hOkWxiJQ_UswTHoZ3Tu3XCxgc3ji2Fs47n2BczOJAtnjiuhQ8Xc234kO_NFNU9TN_NG-MQjbeYqHheyC078EJU20MdFsDhbl-gZwuubpwvOEmt7XQrpTA1t8uSEbZ_9a-hONn_AhL1SRSsITWTlVLZueg5IRYFLP666UUIxPCny04gE2e6-7bS3T8udY-B-T7Q8nS0a3hyE4iEuRcnVcQMEzE5YVK6REkGt3n6GUwC5Z-dq6Be8eeJql899l6U30urXG1zrvYzL/One.Punch.Man.S01E01.German.720p.AAC.WebRip.x264-GSD.mp4?stream=DAb-DYwUHXyEzQed9HyT_ip-1qu9WfKQQzQp9KNcynRD6IktNgZQ4e-uo8j3Kg_fEfFc4hOkWxiJQ_UswTHoZ3Tu3XCxgc3ji2Fs47n2BczOJAtnjiuhQ8Xc234kO_NFNU9TN_NG-MQjbeYqHheyC078EJU20MdFsDhbl-gZwuubpwvOEmt7XQrpTA1t8uSEbZ_9a-hONn_AhL1SRSsITWTlVLZueg5IRYFLP666UUIxPCny04gE2e6-7bS3T8udY-B-T7Q8nS0a3hyE4iEuRcnVcQMEzE5YVK6REkGt3n6GUwC5Z-dq6Be8eeJql899l6U30urXG1zrvYzL" type="mp4/video"  width="375px" autoplay="autoplay" controls="controls"></video>';

};
    if (username == '#Programm') {
        window.location.href = 'Programm.html';
    };
    if (username == '#Anime') {
        window.location.href = 'https://aniworld.to/';
    };
    
            if (username == 'Nathan.pdf') {
        window.location.href = 'https://mega.nz/file/NTczFALI#j6d14GCt-xATBb4_QjJQ5mKTHPBaz2lk_BKc5pSX_d0';
    };
    
        if (username == 'Nathan.epub') {
        window.location.href = 'https://mega.nz/file/caMEGDSC#uqFSjGoohvvNdoq_XA5bMFRsRqrzp01uKKBs4J8Pok8';
    };
    
            if (username == 'DilPrime.TV-App') {
        window.location.href = '';
    };
    
            if (username == 'Conjuring1') {
        window.location.href = 'https://mega.nz/file/kSMCSKSL#SXbZQ5r7I97qkllFKfJhw6oYdu_FSUKjImYeCNr-wmU';
    };
    
                if (username == 'Conjuring2') {
        window.location.href = 'https://mega.nz/file/keFHGIKQ#79mP6SkKZONicrPQ9V9uZScppI-T8nidhc8ebD4Gj-Y';
    };
    
                if (username == 'Conjuring3') {
        window.location.href = 'https://mega.nz/file/IX9jHBjZ#CJjm0EjxbA8_24mJCIfcPeNb6WTFa08St-EOvd4dGi8';
    };
};
