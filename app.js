


$("#submit").on("click",function(e){

    e.preventDefault();

    var artistQuery = $("#artistName").val();
    var searchQuery = $("#songName").val();

    var endPoint  = 'https://api.deezer.com/search?q=artist:"'  + artistQuery + '" track:"' + searchQuery + '"&index=0&limit=1&strict=on&output=jsonp';

    $.ajax({
        url: endPoint,
        method: "GET",
        dataType:'jsonp'
    }).then(function(response){
        var id = response.data[0].artist.id;
        console.log(response);
        console.log(response.data[0].artist.picture_xl)

        $(".albumArt").css("background-image","url(" + response.data[0].album.cover_xl + ")");
        $("#songTitle").html(response.data[0].title);
        $("#album").html(response.data[0].album.title);
        $("#artist").html(response.data[0].artist.name);
        $("#clip").attr("src",response.data[0].preview)

        $.ajax({
            url: "https://api.deezer.com/artist/" + id + "/top?limit=20&output=jsonp",
            method:"GET",
            dataType:'jsonp'
        }).then(function(trackList){
            console.log(trackList);
            var randomNum = Math.floor(Math.random() * 10);
                $(".discover1").css("background-image","url(" + trackList.data[3].album.cover_medium + ")")
                $(".discover2").css("background-image","url(" + trackList.data[4].album.cover_medium + ")")
                $(".discover3").css("background-image","url(" + trackList.data[5].album.cover_medium + ")")
                $("#clip2").attr("src",trackList.data[3].preview)
                $("#clip3").attr("src",trackList.data[4].preview)
                $("#clip4").attr("src",trackList.data[5].preview)
    
        })

    })

    

})









