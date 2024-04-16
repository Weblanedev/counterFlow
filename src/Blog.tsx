import { blog } from "./utils";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<div className="pt-[102px] pb-[77px] container mx-auto">
			{/* <SectionContainer> */}
				<div className="text-center sm:pb-[51px]" data-aos="fade-up">
					<h1 className="text-[40px] leading-[51px] lg:text-[48px] lg:leading-[61px] xl:text-[58px] xl:leading-[74px] font-[700] text-black">
						Press Releases
					</h1>
					<p className="sm:w-[55%] m-auto text-blacks-three mt-[30px] mb-[40px] text-[16px] leading-[30px] lg:text-[18px] xl:text-[22px] xl:leading-[30px] font-[400]">
						Stay updated on the latest news, features and releases on
						Counterflow Technologies.
					</p>
				</div>

				<div
					className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8"
					data-aos="fade-up"
				>
					{blog?.slice(0, 3).map((info) => {
						return (
							<div
								className="p-[16px] sm:p-[21px] border-2 rounded-xl sm:rounded-3xl"
								key={info?.id}
							>
								<Link to={info.href}>
									<a target="_blank" className="overflow-hidden">
										<div className="rounded-lg overflow-hidden flex items-center justify-center ">
											<img
												src={info?.image}
												alt={info?.text}
												className="rounded-lg hover:scale-110 transition-all ease-in-out w-full duration-200 hover:rounded-lg overflow-hidden mx-auto h-[300px]"
											/>
										</div>
									</a>
								</Link>
								<p className="pt-[30px] pb-[20px] text-blacks-three font-[600] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px]">
									{info?.text}
								</p>
								<div className="space-x-2 flex">
									{info?.keywords.slice(0, 3).map((tag, i) => (
										<div key={i} className="flex border p-2 rounded-lg">
											{tag}
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			{/* </SectionContainer> */}
		</div>
	);
};

export default Blog;