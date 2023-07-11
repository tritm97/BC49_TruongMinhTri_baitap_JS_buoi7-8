var tongCacSoDuong = 0;
var demSoDuong = 0;

function resetCacBien() {
    tongCacSoDuong = 0;
    demSoDuong = 0;
};

// Thêm số nguyên vào mảng
var arrNumber = [];
document.getElementById('nhapSo').onclick = function () {
    var soNguyen = document.getElementById('soNguyen').value *1;
    arrNumber.push(soNguyen);
    document.getElementById('hienThiArray').innerHTML = arrNumber;
    resetCacBien();
};

// Tính tổng các số dương
document.getElementById('tinhTong').onclick = function () {
    for (var i=0; i<arrNumber.length; i++) {
        if (arrNumber[i] >= 0) {
            tongCacSoDuong += arrNumber[i];
        }
    }
    document.getElementById('hienThiTongSoDuong').innerHTML = `Tổng các số dương là ${tongCacSoDuong}`;
};

// Đếm có bao nhiêu số dương
document.getElementById('demSo').onclick = function () {
    for (i=0; i<arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById('hienThiDemSoDuong').innerHTML = `Có tất cả ${demSoDuong} số dương`;
};

// Tìm số nhỏ nhất
document.getElementById('timSoNhoNhat').onclick = function () {
    var min = arrNumber[0];
    // console.log(typeof arrNumber[0]);
    for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < min) {
            min = arrNumber[i];
        }
    }
    document.getElementById('hienThiSoNhoNhat').innerHTML = `Số nhỏ nhất: ${min}`;
};

// Tìm số dương nhỏ nhất
document.getElementById('timSoDuongNhoNhat').onclick = function () {
    var soDuong = [];
    // console.log(soDuong == 0);
    for (var i=0; i<arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            soDuong.push(arrNumber[i]);
        }
    };
    if (soDuong == 0) {
        document.getElementById('hienThiSoDuongNhoNhat').innerHTML = `Không có số dương`;
    } else {
        var min = soDuong[0];
        for (var z=1; z<soDuong.length; z++) {
            if (soDuong[z] < min) {
                min = soDuong[z];
            }
        };
        document.getElementById('hienThiSoDuongNhoNhat').innerHTML = `Số dương nhỏ nhất: ${min}`;
    }
};

// Tìm số chẵn cuối cùng
document.getElementById('timSoChanCuoiCung').onclick = function () {
    var soChanCuoiCung = 0;
    var soChan = [];
    for (var z = 0; z < arrNumber.length; z++) {
        if (arrNumber[z] % 2 == 0) {
            soChan.push(arrNumber[z]);
        }
    };
    if (soChan == 0) {
        document.getElementById('hienThiSoChanCuoiCung').innerHTML = `Số chẵn cuối cùng: -1`;
        alert('Không có số chẵn');
    } else {
        for (var i=0; i<soChan.length; i++) {
            soChanCuoiCung = soChan[soChan.length - 1];
            document.getElementById('hienThiSoChanCuoiCung').innerHTML = `Số chẵn cuối cùng: ${soChanCuoiCung}`;
        }
    }
};

