import React from "react";

export default function WhyChooseBetaviet() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tại Sao Chọn BetaViet?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Đội Ngũ Chuyên Nghiệp</h3>
          <p>
            Chúng tôi quy tụ đội ngũ kiến trúc sư, kỹ sư và thợ thi công giàu
            kinh nghiệm, đảm bảo chất lượng công trình.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Thiết Kế Độc Đáo</h3>
          <p>
            Mỗi công trình của BetaViet đều là sự kết hợp giữa thẩm mỹ, công
            năng và phong cách riêng của chủ nhà.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Vật Liệu Chất Lượng</h3>
          <p>
            Chúng tôi chỉ sử dụng vật liệu chất lượng cao, đảm bảo độ bền và
            tính thẩm mỹ cho công trình.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Cam Kết Tiến Độ</h3>
          <p>
            BetaViet cam kết hoàn thành công trình đúng tiến độ, đảm bảo chất
            lượng và đúng với thiết kế ban đầu.
          </p>
        </div>
      </div>
    </div>
  );
}
