const mahasiswa = {
  nim : "A11.2022.14502",
  nama: "Doli",
  umur: 20,
  matkul: [{matkulId: 4704, matkulNama: "PSK", tugas:80, uts: 85, uas: 90}, {matkulId: 4702, matkulNama: "PCD", tugas:100, uts: 85, uas: 90}],
  status: true,
};
const mahasiswa2 = {
  nim : "A11.2022.14502",
  nama: "Koma",
  umur: 20,
  matkul: [{matkulId: 4704, matkulNama: "PSK", tugas:80, uts: 85, uas: 90}, {matkulId: 4702, matkulNama: "PCD", tugas:100, uts: 85, uas: 90}],
  status: true,
};

const listMahasiswa = ["Aufa", "Doli"];

const listMahasiswa2 = [
    {nim: "A11.2022.14502", nama: "Doli", umur: 20, status: true, matkul: [{matkulId: 4704, matkulNama: "PSK", tugas:90, uts: 85, uas: 70}, {matkulId: 4702, matkulNama: "PCD", tugas:100, uts: 85, uas: 90}],},
    {nim: "A11.2022.14503", nama: "Aufa", umur: 21, status: true, matkul: [{matkulId: 4704, matkulNama: "PSK", tugas:80, uts: 85, uas: 90}, {matkulId: 4702, matkulNama: "PCD", tugas:700, uts: 85, uas: 90}],},
];
//tampilkan isi object mahasiswa
console.log(mahasiswa);

//tampilkan isi array
console.log(listMahasiswa);

//tampilkan isi array index 0 dan 1
console.log(listMahasiswa2[0]);
console.log(listMahasiswa2[1]);

//tampilkan key nama object mahasiswa
console.log(mahasiswa.nama);

console.log(mahasiswa["matkul"][0]["matkulNama"]);

//destructuring object
const {nama, nim, } = mahasiswa;
console.log(nama);
console.log(nim);

//destructuring arry
const { dataDoli, dataAufa } = listMahasiswa2;

//destructuring array dari list matkul milik variabel mahasiswa
const { matkul: [matkul1, matkul2] } = mahasiswa;
console.log(matkul1);
console.log(matkul2);

const listMhs = {...mahasiswa, ...mahasiswa2};
console.log(listMhs);

//ES5 - Template Literals
console.log("Nama saya " + mahasiswa.nama + ", nim saya " + mahasiswa.nim);

//ES6 - Template Literals
console.log(`Nama saya ${mahasiswa.nama}, nim saya ${mahasiswa.nim}. umur saya ${mahasiswa.umur} tahun.`);

//ES5 - Function
const jml = (a,b) => a+b;
console.log(`jumlah 10 + 8 = ${jml(10,8)}`);

//ES6 - Method map, filter, reduce
//Map
const listNamaMhs = listMahasiswa2.map((mhs) => mhs.nama);
console.log(listNamaMhs);

//Filter pakai true
const MahasiswaAktif = listMahasiswa2.filter(mhs => mhs.status);
console.log(MahasiswaAktif);

//reduce
const totalNilaiTugas = mahasiswa.matkul.reduce((total, mhs) => total + mhs.tugas, 0);
console.log(totalNilaiTugas);