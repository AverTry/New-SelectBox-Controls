        // Dropdown Search For BS4 Classes

        $(document).ready(function() {

            // JSON Pull from File, then split between ul & li Sections
            $.getJSON("data2.json", function(data) {

                var html = '';
                for (var key in data) { // Each top-level entry
                    html += '<ul><span>' + key + '</span>';
                    for (var i = 0; i < data[key].length; i++) { // Each sub-entry
                        html += '<li>' + data[key][i] + '</li>';
                    }
                    html += '</ul>';
                }
                $('.bs4-list').append(html);

            });

            // Search Classes Function
            $("#myInput1").on("keyup", function() {
                var $classes = $('.bs4-list li');
                var val = $(this).val().toLowerCase();
                $classes.show().filter(function() {
                    var text = $(this).text().toLowerCase();
                    return !~text.indexOf(val);
                }).hide();
                $("ul").each(function() {
                    if ($(this).find("li").is(':visible') || $(this).find("li").css('display') != 'none') {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });

        });

        // Show Scrollbar on hover & touch
        $(".bs4-list").on('mouseenter touchstart', function() {
            $('.bs4-list').addClass('show');
        }).on('mouseleave touchend', function() {
            $('.bs4-list').removeClass('show');
        });

// -----------------------------------------------------------------------------------------------------------------

        // MySelectBox with editable, addable, removerble Rows.

        $('.MySelect').on('click', function(e) {
            e.stopPropagation();
        });

        $(".add").click(function() {
            var randomSelection = ["My New Selector", "Another Selector", "Newer Selector", "Inserted Row", "Selector Row", "Selection Sample", "Editable Selection Box", "Selector designs", "Informational Rows", "Title Prefix Posibilities", "Sample BootStrap Dropdown Ideas", "Random Text Selections, That are editable", "Only change CSS to Fit your Design", "Save to Local Storage, json, or DB", "Innovative Designs", "Ease of use!", "FixNet IT Solutions", "DataSafe 4 Client Database", "DS4 Form Designer", "MultiPage Form Designs"];
            var randomSelector = randomSelection[Math.floor(Math.random() * randomSelection.length)];
            var newElement =
                '<div class="input-group">' +
                '<input type="text" readonly="" class="MySelectItem form-control-plaintext text-secondary" value="' + randomSelector + '">' +
                '<div class="input-group-append">' +
                '<button class="btn btn-sm del" id="del" type="button"><i class="fas fa-minus-square"></i></button>' +
                '</div>' +
                '</div>';
            $(".MySelect").prepend($(newElement));
            $('.del').show();
            $('.MySelectItem').prop("readonly", false);
        });

        var edit = false;
        $('[name="Edit"]').on('click', function() {
            if (!edit) {
                $(this).html('<i class="text-warning fas fa-check-square"></i>');
                $('.MySelectItem').prop("readonly", false);
                $('.add, .del').show();
                edit = true;
            } else {
                $(this).html('<i class="fa fa-ellipsis-v"></i>');
                $('.MySelectItem').prop("readonly", true);
                $('.add, .del').hide();
                var itm = $('.MySelectBox').text();
                save(itm);
                edit = false;
            }
        });

        $(document).ready(function() { // From Local Storage
            var html = '';
            var data = JSON.parse(localStorage.getItem('DropStore'));
            console.log(JSON.stringify(data));
            for (var key in data) {
                for (var i = 0; i < data[key].length; i++) {
                    html +=
                        '<div class="input-group">' +
                        '<input type="text" readonly="" class="MySelectItem form-control-plaintext text-secondary" value="' + data[key][i] + '">' +
                        '<div class="input-group-append">' +
                        '<button class="btn btn-sm del" id="del" type="button"><i class="fas fa-minus-square"></i></button>' +
                        '</div>' +
                        '</div>';
                }
            }
            // console.log(key);
            $('.MySelectBox').text(key);
            $(".MySelect").prepend($(html));
            
        });

        // Save to Local Storage
        function save(key = 'MySelectBox') {
            var arr = $('.MySelectItem').map(function() { return this.value; }).get();
            var jsn = '{"' + key + '":' + JSON.stringify(arr) + '}'
            localStorage.setItem('DropStore', jsn);
        }

        $('.MySelect').on('click', '.MySelectItem', function(e) {
            if (edit) {return;}
            var itm = e.target.value;
            console.log('itm: ', itm);
               $('.MySelectBox').text(itm);
            save(itm);
        });

        // Delete the SelectBoxItem.
        $('.MySelect').on('click', '.del', function() {
            console.log('removing: ',$(this).parent().parent().html() );
            $(this).parent().parent().remove();
        })




        // Extra Code to view or test.

        //  ---------------------------------------------------------------------------------------------------

        // params = '123';
        // jsn = {
        //     key: [...params]
        // };
        // console.log(JSON.stringify(jsn));

        // var obj = JSON.parse(localStorage.getItem('DropStore'));
        // localStorage.setItem('DropStore', JSON.stringify(obj)); 

        // var person = { "name": "billy", "age": 23};
        // localStorage.setItem('person', JSON.stringify(person)); //stringify object and store
        // var retrievedPerson = JSON.parse(localStorage.getItem('person')); //retrieve the object

        // JSON Pull from File, & insert to input values that are dynamically added.
        // $.getJSON("myData.json", function(data) { // From Json File
        // Get Array from Local Storage & add a key value

        //$($('template').html()).insertAfter($('#somewhere_else'));
        // $('.MySelectBox').trigger('click');

        // function getInputsAsJSON() {
        //     var Values = [];
        //     $(".MySelectItem").each(function() {

        //         var key = 'Select'
        //         var value = $(this).val();
        //         Values.push([value])
        //     });
        //     return Values;
        // }

        // function renameKey(obj, oldKey, newKey) {
        //     obj[newKey] = obj[oldKey];
        //     delete obj[oldKey];
        // }
        // const arr = JSON.parse(json);
        // arr.forEach(obj => renameKey(obj, '_id', 'id'));
        // const updatedJson = JSON.stringify(arr);
        // console.log(updatedJson);

        // MySelectBox - Have to use Parent Element for dynamically added content.

        //-------------------------------------------------------------------------------------------
