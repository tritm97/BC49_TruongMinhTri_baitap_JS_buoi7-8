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

// Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById('doiCho').onclick = function () {
    var soViTri1 = document.getElementById('soViTri1').value *1;
    var soViTri2 = document.getElementById('soViTri2').value *1;
    var luuTam = 0;
    if (soViTri1 == soViTri2) {
        alert('Không thể đổi chỗ do 2 vị trí trùng nhau');
        document.getElementById('hienThiDoiCho').innerHTML = `Không thể đổi chỗ`;
    } else {
        if (soViTri1 < 0 || soViTri2 < 0) {
            alert('Số vị trí không hợp lệ (nhỏ hơn 0)');
            document.getElementById('hienThiDoiCho').innerHTML = `Số vị trí không hợp lệ (nhỏ hơn 0)`;
        } else {
            if (soViTri1 > (arrNumber.length - 1) || soViTri2 > (arrNumber.length - 1)) {
                alert('Số vị trí không hợp lệ (quá giới hạn)');
                document.getElementById('hienThiDoiCho').innerHTML = `Số vị trí không hợp lệ (quá giới hạn)`;
            } else {
                luuTam = arrNumber[soViTri1];
                arrNumber[soViTri1] = arrNumber[soViTri2];
                arrNumber[soViTri2] = luuTam;
                document.getElementById('hienThiDoiCho').innerHTML = `Mảng sau khi đổi: ${arrNumber}`;
            }
        }
    }
};