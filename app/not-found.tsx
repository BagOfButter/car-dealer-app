import { ContentWrapper, LinkButton } from '@/shared';

const NotFound = async () => {
  return (
    <ContentWrapper>
      <div className="flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-foreground mb-4">
            Oops! The content you are looking for does not exist.
          </p>
          <LinkButton href="/">Home</LinkButton>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default NotFound;
