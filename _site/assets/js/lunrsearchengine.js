
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Learn more earn more",
    "body": "This website is fully devoted for those, who is new in termux or the person who know linux but slightly confused about termux,so here we discuss about issue ,new packages in termux. we discuss about proot environment linux also. Explore Now: Homepage"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 How to integrate php and apache in linux and termux.                                                  1 2 3 4 5                                              :               As we know without backend language webserver is nothing, and php as backened language fulfill your all requirements with webserver, then let’s go:                                                                                                                                                                       Krishna                                30 Apr 2020                                                                                                                                                                                                                                                                                                                        How to play audio in termux chroot or proot OS like Arch Debian Ubuntu etc                                                 1 2 3 4 5                                              :               follow now The term chroot refers to a process of creating a virtualized environment in a Unix operating system, separating it from the main operating. . . :                                                                                                                                                                       Krishna                                29 Apr 2020                                                                                                                      All Stories:                                                                                                     Setup Gui ,vncserver,x11 and desktop environment in termux                         1 2 3 4 5                      :       This is world of Graphical User Interface, everyone like gui program so similar to linux ,termux have also lot’s of gui program in the separate repo:                                                                               Krishna                03 May 2020                                                                                                                                     How to setup apache server in termux.                          1 2 3 4 5                      :       What is apache server ? The Apache HTTP Server, colloquially called Apache, is a free and open-source cross-platform web server software, released under the terms of Apache License 2. 0. Apache. . . :                                                                               Krishna                30 Apr 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/setup-gui-in-termux/",
    "title": "Setup Gui ,vncserver,x11 and desktop environment in termux",
    "body": "2020/05/03 - This is world of Graphical User Interface, everyone like gui program so similar to linux ,termux have also lot’s of gui program in the separate repo Subscribe x11-repo: In order to subscribe the x11 repo ,execute following command in termux 12 pkg install x11-repo we always recommend that update repo everytime,but since pkg is wrapper of apt ,its automatically update your terminal and then install your packages Requirement:  Vncserver (tigervnc) GUI program Atleast 100 mb of internet data. (Desktop environment) little bit of patiencesetup vncserver:  In computing, Virtual Network Computing is a graphical desktop-sharing system that uses the Remote Frame Buffer protocol to remotely control another computer. It transmits the keyboard and mouse events from one computer to another, relaying the graphical-screen updates back in the other direction, over a network. why vncserverVncserver is needed here because termux does’t support opengles or similar for graphics rendering. By the way we can use xorg server also,but thats not stable in android,thats why i choose vnc. Now you have to install an external vncviewer from playstore install vncviewer with this link . install vncserver 1pkg install tigervncafter installed, execute vncserver vncserver :1 , here vncserver is command and :1 means the vnc server will run on localhost:5901 or 127. 0. 0. 1:5901 it may ask for password, you just give it any password,which you can remind easily, while putting password your password won’t prompt because of privacy. if your terminal gives output like following,then your vncserver is listening on your specified port. for knowledge purpose:sometime you may face issue like following. that time just kill that port, like in following case its is :1 thenvncserver -kill :1 setup Desktop environment(xfce4): There are lots of desktop envirinment for linux like Gnome,xfce4,lxde etc,but termux has only xfce4 available right now. so install xfce4 by : 1pkg install xfce4after that set DISPLAY environment variable, on which your gui program interact. if your vncserver run on :1 then set display on 1,and start xfce4 as well. 12export DISPLAY=:1startxfce4setup vncviewer app. : step 1: Open vncviewer application. and then click on cross + floating button step 2: fill address and name step 3: toggle picture quality on high for best graphics andthen hit connect step 4: if it ask for password, provide it, if you have forgot your vncserver password,then dont’t worry. come in terminal and change your vncpassword with vncpasswd script for summarize: 12345678pkg install x11-repo -ypkg install tigervnc -ypkg install xfce4 -yvncserver -kill :1vncserver :1export DISPLAY=:1startxfce4"
    }, {
    "id": 6,
    "url": "http://localhost:4000/setup-php-with-apache-in-termux/",
    "title": "How to integrate php and apache in linux and termux.",
    "body": "2020/04/30 - As we know without backend language webserver is nothing, and php as backened language fulfill your all requirements with webserver, then let’s go Requirements: Termux provide a separate package for php and Apache in which all requirements install automatically by that package. the name of that package is php-apache By the way it contains modules which loads by Apache . 12pkg install php-apacheand now copy and following in httpd. conf, as i mention in my old tutorialafter that paste following in httpd. conf in last line. 1234567LoadModule php7_module libexec/apache2/libphp7. so&lt;FilesMatch \. php$&gt;  SetHandler application/x-httpd-php&lt;/FilesMatch&gt;&lt;IfModule dir_module&gt;  DirectoryIndex index. php&lt;/IfModule&gt;now the php has linked with apache server, go to document root, the default custom root of apache is /data/data/com. termux/files/usr/share/apache2/default-site/htdocs if you get any type of error, then fresh install all those things, remove php ,apache . fresh installation resolve issues most of the time. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/setup-apache-server-in-termux/",
    "title": "How to setup apache server in termux.",
    "body": "2020/04/30 - What is apache server ?:  The Apache HTTP Server, colloquially called Apache, is a free and open-source cross-platform web server software, released under the terms of Apache License 2. 0. Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation it is web server. The job of a web server is to serve websites on the internet. To achieve that goal, it acts as a middleman between the server and client machines. It pulls content from the server on each user request and delivers it to the web. Requirement. : Here i am going to setup apache2, it’s second version of apache or you can say enhanched version. Install apacheBefore any installion make sure you have updated your terminal packages. pkg upgradepkg install apache2setup configif you are using termux then you can find config file in /data/data/com. termux/files/usr/etc/apache2/the name of config file will be httpd. conf 12cd /data/data/com. termux/files/usr/etc/apache2lsafter execution of above command you should get httpd. conf Config is the important part of settings anythings, here open the httpd. conf (config) file with your favourite editor. Step 1:configure listenafter opening httpd. conf , find Listen 8080 and replace it with Listen 0. 0. 0. 0:8080 here ip 0. 0. 0. 0 means apache server listen all available ip ,you can list your ip or interface with ifconfig. if you face problem in finding, use grep to find pattern. like this grep -n 'Listen ' httpd. conf 1234grep -n 'Listen ' httpd. conf48:# Change this to Listen on specific IP addresses as shown below to51:#Listen 12. 34. 56. 78:8052:Listen 8080you can see in my case listen found in line 52. step 2:set ServerNamei hope you did step 1 without any error. now set servername, you can choose any name for your server for now. like suppose i choose termux then write ServerName termux in last line or any blank linewhen you got error like following, it means you have to set ServerName 1234$apachectlAH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127. 0. 0. 1. Set the 'ServerName' directive globally to suppress this messageafter setup servername run apachectl and go to http://localhost:8080if all things have done nice then your browser should show like following all the setup have done now ,you would thinking ,how can i change above content into my own content,so dont worry, follow one more steps. Putting content for serving: so now go to /data/data/com. termux/files/usr/share/apache2/default-site/htdocs here you find index. htmlif you know html then change it. and restart your apache server 12apachectl stopapachectl Access server from remote: your server is listen on 0. 0. 0. 0 ,it means all available ip, check available ip by ifconfigif you connect with hotspot and wifi then your server can be access from other device if that device connected on same hotspot or router for accessing your server from remote is that port forwarding, you can either forward port through router or ftom service like ngrok or serveo. Ngrok port forwardingyou can download ngrok executable by official site , for downloading ngrok in android 123cd ~/wget --no-check-certificate https://bin. equinox. io/c/4VmDzA7iaHb/ngrok-stable-linux-arm. zipunzip ngrk-stable-linux-arm. zipnow execute . /ngrok http 8080it prompt and connecting to his server and making tunnel, and it provide you ,link like https://ishsksbsks. ngrok. io but not this one now copy that link which ngrok gave you , from that link you can access your server from anywhere in world. ngrok has limitation for free account. i use this for demo only, you can other service or port forwarding from router and use freedns as dynamic dns server for updating your ips,integrate php with apachei hope you enjoyed this tutorial* Enlighten others by sharing it* "
    }, {
    "id": 8,
    "url": "http://localhost:4000/play-audio-in-termux-chroot/",
    "title": "How to play audio in termux chroot or proot OS like Arch Debian Ubuntu etc",
    "body": "2020/04/29 - follow now: The term chroot refers to a process of creating a virtualized environment in a Unix operating system, separating it from the main operating system and directory structure. that’s why we can use it separtely for many purposes like testings,building etc Now before doing anything you must have your termux repo updated and pulseaudio installedfor install pulseaudio ,execute following script 12pkg install pulseaudio -yNow copy and paste follwing command in terminal 12pulseaudio --start --exit-idle-time=-1pacmd load-module module-native-protocol-tcp auth-ip-acl=127. 0. 0. 1 auth-anonymous=1after that make sure you havent get any error. now open chroot ,i mean your linux which you have installed in termux(smart geek)and set the pulse server 1export PULSE_SERVER=127. 0. 0. 1your setup has finished ,play audio in linux ,the audio should works. if that does’t work please contact us. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});