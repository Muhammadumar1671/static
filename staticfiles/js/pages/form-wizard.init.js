$(document).ready(function(){"use strict";$("#basicwizard").bootstrapWizard(),$("#progressbarwizard").bootstrapWizard({onTabShow:function(t,r,a){r=(a+1)/r.find("li").length*100,$("#progressbarwizard").find(".bar").css({width:r+"%"})}}),$("#btnwizard").bootstrapWizard({nextSelector:".button-next",previousSelector:".button-previous",firstSelector:".button-first",lastSelector:".button-last"}),$("#rootwizard").bootstrapWizard({onNext:function(t,r,a){if((t=$($(t).data("targetForm")))&&(t.addClass("was-validated"),!1===t[0].checkValidity()))return event.preventDefault(),event.stopPropagation(),!1}})});