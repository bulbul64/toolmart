import { useFetchData } from "../api/api";
import Card from "../components/Card";
import { Button } from "../components/ui/button";
import { Spinner } from "../components/ui/spinner";

export default function Started() {

 const {toolData, loading} = useFetchData();

    if (loading) {
      return (
        <div className='p-4'>
          <Button
            variant='outline'
            disabled
            size='sm'
          >
            <Spinner />
            Please wait
          </Button>
        </div>
      );
    }




   const heading = 'Get Started in 3 Steps';
   const description = 'Start using premium digital tools in minutes, not hours.';

  return (
    <div className="mb-16">
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold mb-4 '>{heading}</h2>
        <p className='text-lg w-2/3 mx-auto text-gray-600'>{description}</p>
      </div>
      <div className='container mx-auto mt-8 flex justify-center gap-8 flex-wrap'>
        {toolData.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
