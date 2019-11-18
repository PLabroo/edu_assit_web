var count = 0;
$('#post').on('click', function (event) {
    var title = $('#title');
    var category = $('#category');
    var desc = CKEDITOR.instances['editor1'].getData();

    html = `<div class="col-lg- 9 col-sm-12 mt-2">
    <a data-toggle="collapse" href="#collapseExample${count}"  role="button">
        <div class="card text-dark">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm-8">
                        <h5>${title.val()}</h5>
                        <br>
                        <p class="text-info">${category.val()}</p>
                    </div>
                    <div class="ml-auto col-sm-4">
                        <span class="p-2"><i class="fas fa-caret-up"></i>&emsp;543</span>
                        <span class="p-2"><i class="fas fa-eye"></i>&emsp;453</span>
                    </div>
                </div>
            </div>
            <div class="card-body collapse" id="collapseExample${count}" >
                <p>${desc}
                </p>
            </div>
        </div>
    </a>
</div>`

    $('#discussion').append(html);
    title.val("");
    CKEDITOR.instances['editor1'].setData("");
    count++;
})