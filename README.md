# fullstack
BVN buổi 1 :
Bài 1 :
Cách kiểm tra một biến x cho trước là function, array, number, string, undefined
Function : var a = function(){};
            console.log(typeof a);
Array : var a = [];
         console.log(typeof a);
Number : var a = 54;
          console.log(typeof a);
String : var a = "hello world"
          console.log(typeof a);
undefined :  var a
              console.log(typeof a);
Bài 2 :
Tìm hiểu về Event Loop: 
      Ngay sau khi hàm setTimeout() thực thi, browser đặt hàm callback của nó vào trong một Event table. Call stack sẽ đăng ký với Event table một hàm nào đó sẽ chỉ được thực thi khi có một sự kiện cụ thể nào đó xảy ra. Và khi sự kiện đó xảy ra, Event table sẽ di chuyển hàm đã đăng ký sang Event queue. Event queue chỉ đơn giản là một địa điểm cho các hàm chờ được gọi và di chuyển sang Call stack. Và có một process liên tục kiểm tra xem có Call stack nào rỗng không, và nếu rỗng thì nó sẽ kiểm tra Event queue có hàm nào đang đợi hay không. Nếu có thì hàm đầu tiên trong Event queue sẽ được gọi và di chuyển sang Call stack. Nếu Event queue rỗng thì process này vẫn tiếp tục chạy vô thời hạn.
Giải thích đoạn code :
      setTimeout đơn giản giống như việc gọi hàm sau khi kết thúc thời gian trễ. Ở đây setTimeout "Một" được gọi, nó không được thực thi ngay lập tức mà được xếp hàng đợi để nó đươc thực thi sau khi tất cả các bộ xử lý sự kiện đang thực thi và hiện đang ở Event queue kết thúc trước. setTimeout(){, 0} về cơ bản có nghĩa là thực thi sau khi tất cả các hàm hiện tại trong Event queue được thực thi. 
Bài 3 :
const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';
console.log(macbooks) // ['macbook2015', { model: 'm1' }, 'macbook2017']
console.log(apples) // ['air', { model: 'm1' }, 'macbook2017']
apples[0] = 'air' : air là string(kiểu dữ liệu nguyên thủy), khi được gán giá trị sẽ được gắn chặt với biến, biến mới tách biệt hoàn toàn so với biến cũ.
apples[1].model = 'm1' : là Object(kiểu dữ liệu hỗn hợp), mặc dù có sử dụng const apples = [...macbooks] là Spread operator (Toán tử 3 chấm) dùng để deep copy một Object mà không làm thay đổi biến ban đầu nhưng đây là trường hợp Object lồng nhau vậy nên nó làm thay đổi cả biến ban đầu và biến mới. Trường hợp này ta giải quyết bằng cách sử dụng JSON.parse(JSON.stringify(macbooks)) thay vì dùng Spread operator






