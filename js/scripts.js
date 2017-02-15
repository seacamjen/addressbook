$(document).ready(function() {
  $(".addContact").submit(function() {
    var contact = ["firstName", "lastName", "addressStreet", "addressCity", "addressState", "addressZip","email", "phoneNumber"];

      contact.forEach(function(info) {
        var userAddress = $("input#" + info).val();
        $("." + info).text(userAddress).val();
      });
      $(".idCard").show();
  });
});
