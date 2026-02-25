<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260223131526 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE atributo ADD producto_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE atributo ADD CONSTRAINT FK_E6C7678A7645698E FOREIGN KEY (producto_id) REFERENCES producto (id) NOT DEFERRABLE');
        $this->addSql('CREATE INDEX IDX_E6C7678A7645698E ON atributo (producto_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE atributo DROP CONSTRAINT FK_E6C7678A7645698E');
        $this->addSql('DROP INDEX IDX_E6C7678A7645698E');
        $this->addSql('ALTER TABLE atributo DROP producto_id');
    }
}
