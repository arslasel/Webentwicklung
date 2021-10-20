if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        let F = function () {};
        F.prototype = o;
        return new F();
    }
}

oc = Object.create({});
ob = Object.beget({});

log("OC :", oc)
log("OB :", ob)

oc.p = 1;
ob.p = 1;

log("OC :", oc)
log("OB :", ob)
log("OC is: " + oc)
log("OB is: " + ob)